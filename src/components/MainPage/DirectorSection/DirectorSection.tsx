import {DirectorComponent} from "./DirectorComponent";
import {directors} from "../../../assets/data/directors";


export function DirectorSection() {
    const director = directors[Math.floor(Math.random() * directors.length)];

    return (
        <div id={'author'}>
            <DirectorComponent director={director} />
        </div>
    );
}