import {DirectorComponent} from "./DirectorComponent";
import {directors} from "../../../assets/data/directors";


export function DirectorSection() {
    const author = directors[Math.floor(Math.random() * directors.length)];

    return (
        <div id={'author'}>
            <DirectorComponent name={author.name} image={author.mainImage} birthDate={author.birthDate} deathDate={author.deathDate} bio={author.biography} />
        </div>
    );
}