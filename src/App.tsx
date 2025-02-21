import PrimaryLayout from "./layouts/primary-layout.tsx";

const App = () => {
    const child = (
        <div></div>
    )
    return (
        <div className="w-full bg-blue">
            <PrimaryLayout>
                {child}
            </PrimaryLayout>
        </div>
    )
}

export default App