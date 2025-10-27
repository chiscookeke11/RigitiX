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
            <h1 className="text-[40px] font-bold leading-[48px] font-black mb-4">
              What are you interested in?
            </h1>
            <p className="text-[#262626] text-[16px]">
              This Allows us to customize your new home feed
            </p>
          </div>
        </div>

        <div className="flex-1 p-8 space-y-[24px]">
          {Object.entries(interestCategories).map(([category, interests]) => (
            <div key={category} className="space-y-[16px]">
              <h2 className="text-xl font-semibold text-gray-900">{category}</h2>

              <div className="flex flex-wrap gap-[14px]">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${selectedInterests.includes(interest)
                      ? 'bg-[#F87B07] text-white'
                      : 'bg-[#FAFAFA] text-[#262626]'
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
