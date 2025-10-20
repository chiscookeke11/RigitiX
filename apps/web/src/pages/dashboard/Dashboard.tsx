import { ArrowLeftDownIcon } from "../../assets/icons/ArrowLeftDown";
import { useState } from "react";
import { format } from 'date-fns';
import { MoneyIcon } from "../../assets/icons/Money"
import { PeopleIcon } from "../../assets/icons/People"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";

export function Page() {
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="p-8 bg-gray-50 h-full ">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-900 mb-[4px]">Welcome Back, Owai</h1>
          <p className="text-[#737373] text-[14px]">Welcome back Tena, we hope you have event to attend this weekend.</p>
        </div>
        <StatsSection />
        <UpcomingEventsSection isEmpty={isEmpty} setIsEmpty={setIsEmpty} />
        <TicketSalesSection isEmpty={isEmpty} setIsEmpty={setIsEmpty} />
        <BottomSection isEmpty={isEmpty} setIsEmpty={setIsEmpty} />
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-[8px]">
      <StatCard title="Total tickets sold" value={30} change={30} />
      <StatCard title="Total  events Created" value={40} change={10} />
      <StatCard title="Total revenue from ticket sales" value={40} change={-10} />
      <StatCard title="Total user on the platform" value={2} change={10} />
      <StatCard title="Total revenew for current even" value={20} change={10} />
      <StatCard title="Average ticket price" value={40} change={10} />
    </div>
  );
}

function UpcomingEventsSection({ isEmpty, setIsEmpty }: { isEmpty: boolean; setIsEmpty: (value: boolean) => void }) {
  return (
    <div className="mt-[8px] rounded-[24px] bg-white p-6 min-h-[300px]">
      <div className="flex justify-between items-center mb-[20px]">
        <h2 className="text-[14px] font-bold">Upcoming Events</h2>
        <button
          className={`text-sm px-[15px] py-[8px] rounded-full cursor-pointer ${isEmpty ? 'bg-[#FAFAFA] text-[#D4D4D4] ' : 'border-2 border-[#FAFAFA] hover:bg-[#FAFAFA] '} `}
          onClick={() => setIsEmpty(!isEmpty)}
        >
          View all
        </button>
      </div>

      <div className="mt-[28px]">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center py-20 max-w-[300px] mx-auto min-h-[200px]">
            <img src="/images/empty-upcoming-events.png" alt="No Events" className="mb-[8px] w-[70px]" />
            <p className="mb-4 text-center text-[#737373] text-[16px]">
              Looks a little quiet here. Be the first to schedule an event and get things started!
            </p>
            <CreateButton onClick={() => setIsEmpty(!isEmpty)} text="Create Event" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px]">
            {[1, 2, 3].map((_, index) => (
              <EventCard
                key={index}
                image={'/images/default-event.jpg'}
                date={new Date()}
                title={`Mail Design Conference ${index + 1}`}
                location={`Christ Chapel International Churches ${index + 1}`}
                published={true}
                totalTickets={100 + index * 50}
                soldTickets={70 + index * 20}
                pricePerTicket={50 - index * 10}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TicketSalesSection({ isEmpty, setIsEmpty }: { isEmpty: boolean; setIsEmpty: (value: boolean) => void }) {
  return (
    <div className="mt-[8px] rounded-[24px] bg-white p-6 min-h-[300px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[14px] font-bold">Ticket Sales Performance</h2>
        <button
          className={`text-sm px-[15px] py-[8px] rounded-full cursor-pointer ${isEmpty ? 'bg-[#FAFAFA] text-[#D4D4D4] ' : 'border-2 border-[#FAFAFA] hover:bg-[#FAFAFA] '} `}
          onClick={() => setIsEmpty(!isEmpty)}
        >
          Last Year
        </button>
      </div>

      <div className="mt-[28px]">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center py-20 max-w-[300px] mx-auto min-h-[200px]">
            <img src="/images/empty-ticket-sales.png" alt="No Events" className="mb-[8px] w-[70px]" />
            <p className="mb-4 text-center text-[#737373] text-[16px]">
              Looks a little quiet here. Be the first to schedule an event and get things started!
            </p>
          </div>
        ) : (
          <TicketSalesChart />
        )}
      </div>
    </div>
  );
}

function BottomSection({ isEmpty, setIsEmpty }: { isEmpty: boolean; setIsEmpty: (value: boolean) => void }) {
  return (
    <div className="mt-[8px] grid grid-cols-[400px_1fr] gap-[8px]">
      <div className="rounded-[24px] bg-white p-6 min-h-[300px]">
        <h2 className="text-[14px] font-bold">Ticket Category Breakdown</h2>

        <div className="mt-[28px]">
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center py-20 max-w-[300px] mx-auto min-h-[200px]">
              <img src="/images/empty-ticket-cards.png" alt="No Events" className="mb-[8px] w-[70px]" />
              <p className="mb-4 text-center text-[#737373] text-[16px]">
                Looks a little quiet here. Be the first to schedule an event and get things started!
              </p>
            </div>
          ) : (
            <TicketCategoryBreakdown categories={[
              { name: 'Free Ticket', value: 10000, color: '#5DD9A5' },
              { name: 'Paid Ticket', value: 50000, color: '#5BB3FF' }
            ]} />
          )}
        </div>
      </div>

      <div className="rounded-[24px] bg-white p-6 min-h-[300px]">
        <h2 className="text-[14px] font-bold">Top Performing Events</h2>
        <div className="mt-[18px]">
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center py-20 max-w-[300px] mx-auto min-h-[200px]">
              <img src="/images/empty-top-events.png" alt="No Events" className="mb-[8px] w-[70px]" />
              <p className="mb-4 text-center text-[#737373] text-[16px]">
                Looks a little quiet here. Be the first to schedule an event and get things started!
              </p>
              <CreateButton onClick={() => setIsEmpty(!isEmpty)} text="Create Event" />
            </div>
          ) : (
            <div className="flex gap-[8px] max-w-full overflow-scroll">
              {[1, 2].map((_, index) => (
                <EventCard
                  key={index}
                  image={'/images/default-event.jpg'}
                  date={new Date()}
                  title={`Mail Design Conference ${index + 1}`}
                  location={`Christ Chapel International Churches ${index + 1}`}
                  published={false}
                  totalTickets={100 + index * 50}
                  soldTickets={70 + index * 20}
                  pricePerTicket={50 - index * 10}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


function StatCard({ title, value, change }: { title: string; value: number, change: number }) {
  return (
    <div className="bg-white p-6 rounded-[20px] w-full">
      <div className="flex justify-between items-center mb-[18px]">
        <span className="w-[40px] h-[40px] border border-[#E4E4E4] flex items-center justify-center rounded-full">
          <ArrowLeftDownIcon />
        </span>
      </div>
      <p className="text-[14px] text-[#A3A3A3]">{title}</p>
      <div className="flex items-center mt-[4px]">
        <p className="text-lg font-black">{value}k</p>
        <div className={`flex items-center ml-[10px] ${change >= 0 ? 'bg-[#c2ffcc] text-[#126833]' : 'bg-[#FFC0C5] text-[#681219]'} px-[8px] py-[2px] rounded-full`}>
          <span className="text-sm font-medium">{change}%</span>
        </div>
      </div>
    </div>
  );
}

function EventCard(props: { date: Date, title: string, location: string, published: boolean, totalTickets: number, soldTickets: number, pricePerTicket: number, image: string }
) {
  return (
    <div className="bg-white rounded-[20px] w-full min-w-[300px]">
      <img src={props.image} alt="Event" className="w-full h-[180px] object-cover rounded-[24px] mb-[10px]" />
      <p className="text-[18px]">{props.title}</p>
      <div className="flex items-center mt-[4px] text-[#737373] gap-[8px] text-[14px]">
        <span>{format(props.date, 'MMM dd, yyyy')}</span> <span className="bg-[#E4E4E4] h-[8px] w-[8px] rounded-full"></span>
        <span>{format(props.date, 'h:m a')}</span>
      </div>
      <p className="text-[14px] text-[#737373] mt-[4px]">{props.location}</p>
      {
        props.published && <div className="mt-[18px]">
          <div className="flex justify-between items-center mb-[4px]">
            <p className="text-[14px] font-semibold mb-[6px]">
              Ticket sales
            </p>

            <p className="font-semibold mb-[6px] text-[#737373] text-[12px]">
              {props.soldTickets}/{props.totalTickets}
            </p>
          </div>
          <div className="w-full bg-[#E4E4E4] h-[8px] rounded-full overflow-hidden">
            <div
              className="bg-[#F99539] h-[8px] rounded-full"
              style={{ width: `${(props.soldTickets / props.totalTickets) * 100}%` }}
            ></div>
          </div>
        </div>
      }
      {
        !props.published && <div className="mt-[18px] flex gap-[8px]">
          <div className="bg-[#FEF2E6] px-[10px] py-[4px] text-[#F87B07] flex gap-[5px] items-center rounded-full text-[14px]">
            <MoneyIcon />
            <span>
              {props.pricePerTicket}
            </span>
          </div>
          <div className="bg-[#EBF8FF] px-[10px] py-[4px] text-[#124B68] flex gap-[5px] items-center rounded-full text-[14px]">
            <PeopleIcon />
            <span>
              {props.totalTickets}
            </span>

          </div>
        </div>
      }
    </div>
  );
}

function TicketSalesChart() {
  const monthlyData = [
    { month: 'JAN', sales: 8000 },
    { month: 'FEB', sales: 9000 },
    { month: 'MAR', sales: 8500 },
    { month: 'APR', sales: 9500 },
    { month: 'MAY', sales: 10000 },
    { month: 'JUN', sales: 9800 },
    { month: 'JUL', sales: 11000 },
    { month: 'AUG', sales: 4000 },
    { month: 'SEP', sales: 4500 },
    { month: 'OCT', sales: 5000 },
    { month: 'NOV', sales: 5200 },
    { month: 'DEC', sales: 5500 }
  ];

  return (
    <div className="mt-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#9CA3AF' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#9CA3AF' }}
            tickFormatter={(value) => `${value / 1000}k`}
          />
          <Bar
            dataKey="sales"
            fill="#87CEEB"
            radius={[8, 8, 8, 8]}
            barSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

interface TicketCategoryBreakdownProps {
  categories: {
    name: string;
    value: number;
    color: string;
  }[];
}

function TicketCategoryBreakdown({ categories }: TicketCategoryBreakdownProps) {
  const totalTickets = categories.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="mt-4 flex flex-col items-center full">
      <div className="relative">
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={categories}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {categories.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500 mb-1">Total</p>
          <p className="text-2xl font-bold text-gray-900">{totalTickets.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Tickets Rolled Out</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 mt-6">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: category.color }}
              />
              <span className="text-sm font-medium text-gray-900">
                {category.value.toLocaleString()}
              </span>
            </div>
            <span className="text-sm text-gray-500">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CreateButton({ onClick, text }: {
  onClick: () => void;
  text: string;
}) {
  return (
    <button
      className="bg-white text-black px-6 py-3 rounded-full  text-[14px] font-semibold border-2 border-[#FAFAFA] regular-shadow-md cursor-pointer hover:bg-[#FAFAFA]"
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}
