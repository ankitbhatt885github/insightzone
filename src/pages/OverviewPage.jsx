import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";


import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";

const OverviewPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Overview' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
			 
				<div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					
				>
					<StatCard name='Sales Amount' icon={Zap} value='$12,345' color='#FFFFFF' />
					<StatCard name='Active Users' icon={Users} value='1,234' color='#FFFFFF' />
					<StatCard name='Total Products' icon={ShoppingBag} value='567' color='#FFFFFF' />
					<StatCard name='Conversion Rate' icon={BarChart2} value='12.5%' color='#FFFFFF' />
				</div>

		 
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <CategoryDistributionChart />
					<SalesOverviewChart />
					
					<SalesChannelChart />
				</div>
			</main>
		</div>
	);
};
export default OverviewPage;