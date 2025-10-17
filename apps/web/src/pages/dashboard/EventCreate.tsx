import { useState } from "react";
import { 
  EyeIcon, 
  Upload01Icon,
  Delete01Icon,
  InformationCircleIcon,
  Calendar01Icon,
  Location01Icon
} from "hugeicons-react";

export function EventCreate() {
  const [formData, setFormData] = useState({
    eventName: "PHPConnect' 25",
    eventDescription: "",
    eventCategory: "Conference",
    tags: ["Tech", "Hackathon", "TechInnovate2025"],
    eventType: "one-time"
  });

  const [newTag, setNewTag] = useState("");

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

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Event</h1>
        <p className="text-gray-600">Set up your event with all the details and media</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 mb-8">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          <EyeIcon size={16} />
          Preview Event
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
          Save to Draft
        </button>
      </div>

      {/* Progress Stepper */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
            1
          </div>
          <span className="text-orange-500 font-medium">Basic Info</span>
        </div>
        <div className="w-8 h-px bg-gray-300"></div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-medium">
            2
          </div>
          <span className="text-gray-500">Ticketing</span>
        </div>
        <div className="w-8 h-px bg-gray-300"></div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-medium">
            3
          </div>
          <span className="text-gray-500">Media</span>
        </div>
        <div className="w-8 h-px bg-gray-300"></div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-medium">
            4
          </div>
          <span className="text-gray-500">Event Configuration</span>
        </div>
        <div className="w-8 h-px bg-gray-300"></div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-medium">
            5
          </div>
          <span className="text-gray-500">Review & Publish</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cover Photo Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cover Photo</h3>
            
            {/* Cover Photo Placeholder */}
            <div className="relative mb-4">
              <div className="w-full h-64 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-2">PHPConnect 2025</div>
                  <div className="text-lg">THE BUILDER'S EDITION</div>
                </div>
                <button className="absolute bottom-3 right-3 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                  <Delete01Icon size={16} />
                </button>
              </div>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors">
              <Upload01Icon size={20} />
              Upload Cover Photo
            </button>
          </div>
        </div>

        {/* Event Details Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Event Details</h3>
              <p className="text-gray-600">Basic information about your event</p>
            </div>

            <div className="space-y-6">
              {/* Event Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Name
                </label>
                <input
                  type="text"
                  value={formData.eventName}
                  onChange={handleInputChange('eventName')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g John Doe"
                />
              </div>

              {/* Event Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Description
                </label>
                <textarea
                  value={formData.eventDescription}
                  onChange={handleInputChange('eventDescription')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Describe your event in details"
                />
                <div className="flex items-center justify-between mt-2">
                  <button className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700">
                    ✨ Suggest Description
                  </button>
                  <span className="text-sm text-gray-500">132 / 140</span>
                </div>
              </div>

              {/* Event Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Category
                </label>
                <select
                  value={formData.eventCategory}
                  onChange={handleInputChange('eventCategory')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
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
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  Tags
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g Tech"
                />
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Select Type of Event
                </label>
                <p className="text-sm text-gray-600 mb-4">Choose between One-Time or Recurring Event</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* One-Time Event */}
                  <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.eventType === 'one-time'
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, eventType: 'one-time' }))}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        formData.eventType === 'one-time'
                          ? 'border-green-500 bg-green-500'
                          : 'border-gray-300'
                      }`}>
                        {formData.eventType === 'one-time' && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                      <Calendar01Icon size={20} color={formData.eventType === 'one-time' ? '#10B981' : '#6B7280'} />
                      <div>
                        <h4 className="font-medium text-gray-900">One-Time Event</h4>
                        <p className="text-sm text-gray-600">For single occurrence events</p>
                      </div>
                    </div>
                  </div>

                  {/* Recurring Event */}
                  <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.eventType === 'recurring'
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, eventType: 'recurring' }))}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        formData.eventType === 'recurring'
                          ? 'border-green-500 bg-green-500'
                          : 'border-gray-300'
                      }`}>
                        {formData.eventType === 'recurring' && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                      <Location01Icon size={20} color={formData.eventType === 'recurring' ? '#10B981' : '#6B7280'} />
                      <div>
                        <h4 className="font-medium text-gray-900">Recurring Event</h4>
                        <p className="text-sm text-gray-600">For timed entry and multiple days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
