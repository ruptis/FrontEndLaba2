import {Container} from "@mui/material";
import SearchBar from "../components/SearchPage/SearchBar";
import {Background} from "../components/Background";
import background from "../assets/images/background.svg";
import {SearchResult} from "../components/SearchPage/SearchResult";
import {directors} from "../assets/data/directors";
import {useEffect, useState} from "react";
import IDirector from "../models";

export function SearchPage() {
    const [searchValue, setSearchValue] = useState<string>('');
    const [filteredAuthors, setFilteredAuthors] = useState<IDirector[]>(directors);

    useEffect(() => {
        setFilteredAuthors(directors.filter(director => director.name.toLowerCase().includes(searchValue.toLowerCase())));
    }, [searchValue]);

    return (
        <Background background={background}>
            <div style={{height: 'auto', width: '100%', minHeight: '100vh'}}>
                <Container sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }
                }>
                    <SearchBar placeholder="Поиск по имени" onChange={setSearchValue}/>
                    {filteredAuthors.map(director => <SearchResult director={director}/>)}
                </Container>
            </div>
        </Background>
    );
}
export default SearchPage;