import Footer from "../components/Footer";
import PromoSection from "../components/PromoSection/PromoSection";
import QuoteSection from "../components/QuoteSection/QuoteSection";

export function MainPage() {
    return (
        <div className="MainPage">
            <PromoSection />
            <QuoteSection />
            <Footer /> 
        </div>
    );
}
export default MainPage;