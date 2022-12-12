import Footer from "../components/Footer";
import PromoSection from "../components/PromoSection/PromoSection";
import QuoteSection from "../components/QuoteSection/QuoteSection";
import {Background} from "../components/Background";
import background from "../assets/images/background.png";
import AboutSection from "../components/AboutSection/AboutSection";
import {DirectorSection} from "../components/DirectorSection/DirectorSection";

export function MainPage() {
    return (
        <>
            <PromoSection />
            <Background background={background}>
                <QuoteSection />
                <AboutSection />
                <DirectorSection />
            </Background>
        </>
    );
}
export default MainPage;