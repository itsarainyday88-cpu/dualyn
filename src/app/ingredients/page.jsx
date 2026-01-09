import IngredientsSection from '../../components/sections/Ingredients';

export const metadata = {
    title: 'Ingredients | DUALYN',
    description: 'Explore the premium ingredients that make DUALYN effective and safe.',
};

export default function IngredientsPage() {
    return (
        <div style={{ paddingTop: '80px' }}>
            <h1 className="sr-only">Ingredients</h1>
            <IngredientsSection />
        </div>
    );
}
