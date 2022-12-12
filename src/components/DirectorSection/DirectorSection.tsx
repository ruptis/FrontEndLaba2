import {DirectorComponent} from "./DirectorComponent";
import {authors} from "../../assets/data/authors";


export function DirectorSection() {
    const author = authors[Math.floor(Math.random() * authors.length)];

    return (
        <div>
            <DirectorComponent name={author.name} image={author.mainImage} birthDate={author.birthDate} deathDate={author.deathDate} bio={author.biography} />
        </div>
    );
}