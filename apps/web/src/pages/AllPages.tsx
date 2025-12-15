import { Link } from "react-router";

export function Page() {
  const routes = [
    { name: 'Auth Index', path: '/auth' },
    { name: 'Register', path: '/auth/register' },
    { name: 'Login', path: '/auth/login' },
    { name: 'OTP Verification', path: '/auth/otp-verification' },
    { name: 'Interests', path: '/auth/interests' },
    { name: 'Launchpad', path: '/auth/launchpad' },
    { name: 'Forgot Password', path: '/auth/forgot-password' },
    { name: 'Update Password', path: '/auth/update-password' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Create Event', path: '/dashboard/events/create' },
    { name: 'Revenue', path: '/dashboard/financials' },
    { name: 'Payout', path: '/dashboard/financials/payout' },
    { name: 'Payout Methods', path: '/dashboard/financials/payout-method' },
    { name: 'Transactions', path: '/dashboard/financials/transactions' },
    { name: 'Refunds', path: '/dashboard/financials/refunds' },
    {name: 'Home', path: '/Home'},
    {name: 'About', path: '/About'}
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">All Pages</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {routes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className="p-4 border rounded-lg hover:bg-gray-50 hover:border-orange-500 transition-colors"
          >
            <div className="font-medium">{route.name}</div>
            <div className="text-sm text-gray-600">{route.path}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}