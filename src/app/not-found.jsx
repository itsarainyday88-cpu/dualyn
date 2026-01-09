import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center min-h-[70vh] text-center px-4 pt-20'>
            <h2 className='text-4xl font-serif text-[var(--color-burgundy)] mb-4'>Page Not Found</h2>
            <p className='text-gray-600 mb-8'>Could not find requested resource</p>
            <Link href="/" className='px-6 py-3 bg-[var(--color-burgundy)] text-white rounded-full hover:opacity-90 transition-opacity'>
                Return Home
            </Link>
        </div>
    );
}
