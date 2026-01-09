import Philosophy from '../../components/sections/Philosophy';

export const metadata = {
    title: 'Brand Story | DUALYN',
    description: 'The philosophy behind DUALYN: Where science meets luxury for ultimate skin regeneration.',
};

export default function BrandStoryPage() {
    return (
        <div style={{ paddingTop: '80px' }}>
            <h1 className="sr-only">Brand Story</h1>
            <Philosophy />
        </div>
    );
}
