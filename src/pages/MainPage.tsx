import PromoSection from "../components/MainPage/PromoSection/PromoSection";
import QuoteSection from "../components/MainPage/QuoteSection/QuoteSection";
import {Background} from "../components/Background";
import background from "../assets/images/background.svg";
import AboutSection from "../components/MainPage/AboutSection/AboutSection";
import {DirectorSection} from "../components/MainPage/DirectorSection/DirectorSection";

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