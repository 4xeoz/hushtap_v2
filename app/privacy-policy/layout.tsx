export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section className="bg-background-1 text-foreground min-h-screen flex items-center justify-center p-4">
            {children}
        </section>
    );
}