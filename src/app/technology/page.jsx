import CoreTech from '../../components/sections/CoreTech';
import LNPTech from '../../components/sections/LNPTech';
import DualSystem from '../../components/sections/DualSystem';
import Evidence from '../../components/sections/Evidence';

export const metadata = {
    title: 'Technology | DUALYN',
    description: 'Discover the advanced dual PDRN and LNP technology powering DUALYN.',
};

export default function TechnologyPage() {
    return (
        <div style={{ paddingTop: '80px' }}>
            <h1 className="sr-only">Technology</h1>
            <CoreTech />
            <LNPTech />
            <DualSystem />
            <Evidence />
        </div>
    );
}
