import { 
  Calendar01Icon, 
  UserIcon, 
  ArrowRight01Icon, 
  DollarCircleIcon,
  PlusSignIcon
} from "hugeicons-react";

export function Dashboard() {
  const stats = [
    {
      title: "Total Events",
      value: "24",
      change: "+12%",
      changeType: "positive",
      icon: Calendar01Icon
    },
    {
      title: "Total Attendees",
      value: "1,847",
      change: "+8%",
      changeType: "positive",
      icon: UserIcon
    },
    {
      title: "Revenue",
      value: "$12,450",
      change: "+23%",
      changeType: "positive",
      icon: DollarCircleIcon
    },
    {
      title: "Growth Rate",
      value: "15.2%",
      change: "-2%",
      changeType: "negative",
      icon: ArrowRight01Icon
    }
  ];

  const recentEvents = [
    {
      id: 1,
      name: "PHPConnect' 25",
      date: "Dec 15, 2024",
      attendees: 245,
      status: "active"
    },
    {
      id: 2,
      name: "Tech Innovation Summit",
      date: "Dec 20, 2024",
      attendees: 180,
      status: "draft"
    },
    {
      id: 3,
      name: "Blockchain Workshop",
      date: "Jan 5, 2025",
      attendees: 95,
      status: "scheduled"
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your events.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
          <PlusSignIcon size={16} />
          Create Event
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <Icon size={24} color="#6B7280" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Events */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Recent Events</h2>
          <button className="text-orange-500 hover:text-orange-600 font-medium">
            View All
          </button>
        </div>
        
        <div className="space-y-4">
          {recentEvents.map((event) => (
            <div key={event.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {event.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{event.name}</h3>
                  <p className="text-sm text-gray-600">{event.date} • {event.attendees} attendees</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  event.status === 'active' 
                    ? 'bg-green-100 text-green-800'
                    : event.status === 'draft'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {event.status}
                </span>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
