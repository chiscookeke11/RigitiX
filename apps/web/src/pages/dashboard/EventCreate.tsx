import { useState } from "react";
import { 
  EyeIcon, 
  Upload01Icon,
  InformationCircleIcon,
  Calendar01Icon,
  Location01Icon,
  FloppyDiskIcon,
  ArrowRight01Icon
} from "hugeicons-react";
import { EventButton } from "../../components/EventButton";

export function EventCreate() {
  const [formData, setFormData] = useState({
    eventName: "PHPConnect' 25",
    eventDescription: "",
    eventCategory: "Conference",
    tags: ["Tech", "Hackathon", "TechInnovate2025"],
    eventType: "one-time"
  });

  const [newTag, setNewTag] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [field]: (e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement).value }));
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
  };

  return (
    <div className="p-6 w-full max-w-6xl mx-auto">
      {/* Page Header and Action Buttons */}
      <div className="event-header-container mb-8">
        <div>
          <h1 className="event-title">Create New Event</h1>
          <p className="event-subtitle">Set up your event with all the details and media</p>
        </div>
        <div className="flex gap-3">
          <EventButton icon={EyeIcon}>
            Preview Event
          </EventButton>
          <EventButton icon={FloppyDiskIcon}>
            Save to Draft
          </EventButton>
        </div>
      </div>

      {/* Progress Stepper */}
      <div className="event-stepper-container mb-8">
        <div className="event-stepper-item">
          <div className="event-stepper-number event-stepper-number-active">1</div>
          <span className="event-stepper-text event-stepper-text-active">Basic Info</span>
        </div>
        <div className="event-stepper-arrow">
          <ArrowRight01Icon size={20} color="#737373" />
        </div>
        <div className="event-stepper-item">
          <div className="event-stepper-number event-stepper-number-inactive">2</div>
          <span className="event-stepper-text event-stepper-text-inactive">Ticketing</span>
        </div>
        <div className="event-stepper-arrow">
          <ArrowRight01Icon size={20} color="#737373" />
        </div>
        <div className="event-stepper-item">
          <div className="event-stepper-number event-stepper-number-inactive">3</div>
          <span className="event-stepper-text event-stepper-text-inactive">Media</span>
        </div>
        <div className="event-stepper-arrow">
          <ArrowRight01Icon size={20} color="#737373" />
        </div>
        <div className="event-stepper-item">
          <div className="event-stepper-number event-stepper-number-inactive">4</div>
          <span className="event-stepper-text event-stepper-text-inactive">Event Configuration</span>
        </div>
        <div className="event-stepper-arrow">
          <ArrowRight01Icon size={20} color="#737373" />
        </div>
        <div className="event-stepper-item">
          <div className="event-stepper-number event-stepper-number-inactive">5</div>
          <span className="event-stepper-text event-stepper-text-inactive">Review & Publish</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col xl:flex-row gap-8 w-full">
        {/* Cover Photo Section */}
        <div className="event-cover-container">
          <label className="event-form-label">Cover Photo</label>
          <div className="event-cover-placeholder relative">
            {imagePreview ? (
              <>
                <img 
                  src={imagePreview} 
                  alt="Cover preview" 
                  className="w-full h-full object-cover rounded-3xl"
                />
                <button 
                  onClick={removeImage}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  ×
                </button>
              </>
            ) : (
              <span>No image uploaded</span>
            )}
          </div>
          <label className="event-upload-button cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <div className="event-button-icon">
              <Upload01Icon size={20} />
            </div>
            {imagePreview ? "Change Cover Photo" : "Upload Cover Photo"}
          </label>
        </div>

        {/* Event Details Form */}
        <div className="event-form-container">
          <div className="mb-4">
            <h2 className="event-form-label">Event Details</h2>
            <p className="event-form-sublabel">Basic information about your event</p>
          </div>

          <div className="space-y-4">
            {/* Event Name */}
            <div>
              <label className="event-form-label mb-2">
                Event Name *
                <span className="text-gray-500 font-normal ml-2">(Optional)</span>
              </label>
              <input
                type="text"
                value={formData.eventName}
                onChange={handleInputChange('eventName')}
                className="event-form-input"
                placeholder="e.g John Doe"
              />
            </div>

            {/* Event Description */}
            <div>
              <label className="event-form-label mb-2">
                Event Description *
                <span className="text-gray-500 font-normal ml-2">(Optional)</span>
              </label>
              <textarea
                value={formData.eventDescription}
                onChange={handleInputChange('eventDescription')}
                rows={4}
                className="event-form-textarea"
                placeholder="Describe your event in details"
              />
              <div className="flex items-center justify-between mt-2">
                <button className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700">
                  ✨ Suggest Description
                </button>
                <span className="event-form-sublabel">0/200</span>
              </div>
            </div>

            {/* Event Category */}
            <div>
              <label className="event-form-label mb-2">
                Event Category *
                <span className="text-gray-500 font-normal ml-2">(Optional)</span>
              </label>
              <select
                value={formData.eventCategory}
                onChange={handleInputChange('eventCategory')}
                className="event-form-input"
              >
                <option value="">Select Category</option>
                <option value="Conference">Conference</option>
                <option value="Workshop">Workshop</option>
                <option value="Meetup">Meetup</option>
                <option value="Hackathon">Hackathon</option>
                <option value="Seminar">Seminar</option>
                <option value="Webinar">Webinar</option>
              </select>
            </div>

            {/* Tags */}
            <div>
              <label className="flex items-center gap-2 event-form-label mb-2">
                Tags *
                <span className="text-gray-500 font-normal ml-2">(Optional)</span>
                <InformationCircleIcon size={16} color="#A3A3A3" />
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {formData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                    <button
                      onClick={() => removeTag(tag)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag((e.target as HTMLInputElement).value)}
                onKeyPress={handleKeyPress}
                className="event-form-input"
                placeholder="e.g Tech"
              />
            </div>

            {/* Event Type */}
            <div>
              <label className="event-form-label mb-2">
                Select Type of Event
              </label>
              <p className="event-form-sublabel mb-3">Choose between One-Time or Recurring Event</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {/* One-Time Event */}
                <div
                  className={`event-selection-box ${formData.eventType === 'one-time' ? 'border-2 border-orange-500' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, eventType: 'one-time' }))}
                >
                  <div className={`event-selection-radio ${formData.eventType === 'one-time' ? 'selected' : ''}`}>
                    {formData.eventType === 'one-time' && <div className="event-selection-radio-dot"></div>}
                  </div>
                  <div className="event-selection-icon">
                    <Calendar01Icon size={20} color="#FFFFFF" />
                  </div>
                  <h3 className="event-selection-title">One-Time Event</h3>
                  <p className="event-selection-subtitle">For events that happen once</p>
                </div>

                {/* Recurring Event */}
                <div
                  className={`event-selection-box ${formData.eventType === 'recurring' ? 'border-2 border-orange-500' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, eventType: 'recurring' }))}
                >
                  <div className={`event-selection-radio ${formData.eventType === 'recurring' ? 'selected' : ''}`}>
                    {formData.eventType === 'recurring' && <div className="event-selection-radio-dot"></div>}
                  </div>
                  <div className="event-selection-icon">
                    <Location01Icon size={20} color="#FFFFFF" />
                  </div>
                  <h3 className="event-selection-title">Recurring Event</h3>
                  <p className="event-selection-subtitle">For timed entry and multiple days</p>
                </div>
              </div>
            </div>

            {/* Select Video Platform */}
            <div>
              <label className="event-form-label mb-2">
                Select Video Platform *
                <span className="text-gray-500 font-normal ml-2">(Optional)</span>
              </label>
              <select className="event-form-input">
                <option value="">Select Platform</option>
                <option value="youtube">YouTube</option>
                <option value="vimeo">Vimeo</option>
                <option value="zoom">Zoom</option>
                <option value="teams">Microsoft Teams</option>
              </select>
            </div>

            {/* Event Location */}
            <div>
              <label className="event-form-label mb-2">
                Event Location
              </label>
              <p className="event-form-sublabel mb-3">Choose between physical or virtual event</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Physical Event */}
                <div className="event-selection-box">
                  <div className="event-selection-radio">
                  </div>
                  <div className="event-selection-icon">
                    <Calendar01Icon size={20} color="#FFFFFF" />
                  </div>
                  <h3 className="event-selection-title">Physical Event</h3>
                  <p className="event-selection-subtitle">For events that happen once</p>
                </div>

                {/* Virtual Event */}
                <div className="event-selection-box">
                  <div className="event-selection-radio">
                  </div>
                  <div className="event-selection-icon">
                    <Location01Icon size={20} color="#FFFFFF" />
                  </div>
                  <h3 className="event-selection-title">Virtual Event</h3>
                  <p className="event-selection-subtitle">For timed entry and multiple days</p>
                </div>
              </div>
            </div>

            {/* Venue Name */}
            <div>
              <label className="event-form-label mb-2">
                Venue Name *
                <span className="text-gray-500 font-normal ml-2">(Optional)</span>
              </label>
              <input
                type="text"
                className="event-form-input"
                placeholder="search location"
              />
              <button className="mt-2 text-sm text-blue-600 hover:text-blue-700">
                Use Map
              </button>
            </div>

            {/* Organizer's Note */}
            <div>
              <label className="event-form-label mb-2">
                Organizer's Note (Optional) *
                <span className="text-gray-500 font-normal ml-2">(Optional)</span>
              </label>
              <textarea
                rows={4}
                className="event-form-textarea"
                placeholder="Describe your event in details"
              />
              <div className="flex items-center justify-between mt-2">
                <span className="event-form-sublabel">0/200</span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <EventButton variant="outline">
                Previous
              </EventButton>
              <EventButton variant="primary" className="!bg-orange-500 hover:!bg-orange-600">
                Next: Ticketing
              </EventButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
