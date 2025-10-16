import { useMemo } from "react";
import { NavLink } from "react-router"

export function Page() {
  const roles = useMemo(() => ([
    {
      name: 'Attendee',
      description: 'I want to buy tickets, vote for my favorite candidate, purchase event items, and generate attendance pictures.',
      image: '/images/attendee.png',
      buttonText: 'Get Started As Attendee',
      link: '/auth/register?role=attendee'
    },
    {
      name: 'Organizer',
      description: 'I want to create events, host contests, sell products, and customize attendance photo frames.',
      image: '/images/organizer.png',
      buttonText: 'Get Started As Organizer',
      link: '/auth/register?role=organizer'
    }
  ]), []);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[800px]">
        <div className="text-[#262626] mt-[25px]">
          <h1 className="text-[20px] font-extrabold">What best describes you?</h1>
          <p className="mt-[7px]">
            Choose your role to get a personalized experience
          </p>
        </div>

        <div className="mt-[30px] grid grid-cols-1 md:grid-cols-2 gap-[23px]">
          {roles.map((role) => (
            <NavLink
              className="space-y-[10px] w-full hover:scale-[1.02] transition-transform cursor-pointer"
              key={role.name}
              to={role.link}
            >
              <img src={role.image} alt={role.name} className="w-full h-[200px] object-cover rounded-[26px]" />

              <div>
                <h2 className="font-bold text-[16px] mb-[4px]">{role.name}</h2>
                <p className="text-[14px] text-[#8e8e8e]">
                  {role.description}
                </p>
              </div>

              <button className="bg-white auth-button-shadow rounded-full py-[10px] px-[30px] mt-[12px] border-2 border-[#FAFAFA]">
                {role.buttonText}
              </button>
            </NavLink>

          ))}

        </div>
      </div>
    </div>
  );
}
