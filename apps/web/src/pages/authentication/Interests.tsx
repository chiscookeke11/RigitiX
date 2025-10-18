import { useState } from 'react';
import { Button } from "../../components/Button";

export function Page() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interestCategories = {
    'Arts & Culture': [
      'Theatre', 'Theatre Performance', 'Theatre Play', 'Drama', 'Exhibitions',
      'Dance Performance', 'Film Screenings', 'Indie Cinema', 'Photography', 'Museums',
      'Literature', 'Story Telling', 'Pottery', 'Ceramics', 'Art Galleries', 'Sculpting'
    ],
    'Music': [
      'Theatre', 'Theatre Performance', 'Theatre Play', 'Drama', 'Exhibitions',
      'Dance Performance', 'Film Screenings', 'Indie Cinema', 'Photography', 'Museums',
      'Literature', 'Story Telling', 'Pottery', 'Ceramics', 'Art Galleries', 'Sculpting'
    ]
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = () => {
    console.log('Selected interests:', selectedInterests);
    // Handle navigation to next page
  };

  return (
    <div className="bg-white">
      <div className="min-h-screen flex max-w-[1100px] mx-auto py-[50px] relative">
        <div className="flex-1 p-8 max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              What are you interested in?
            </h1>
            <p className="text-gray-600 text-base">
              This Allows us to customize your new home feed
            </p>
          </div>
        </div>

        <div className="flex-1 p-8 space-y-8">
          {Object.entries(interestCategories).map(([category, interests]) => (
            <div key={category} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">{category}</h2>

              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${selectedInterests.includes(interest)
                      ? 'bg-orange-500 text-white border-orange-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                      }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-8 right-8">
          <Button
            onClick={handleSubmit}
            variant="primary"
            className="px-8 py-3 text-base font-semibold rounded-full shadow-lg"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
