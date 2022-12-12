import {InputAdornment, TextField} from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

interface SearchBarProps {
    placeholder: string;
    onChange: (value: string) => void;
}
export function SearchBar(props: SearchBarProps) {
    return (
        <TextField
            label={props.placeholder}
            InputProps={{
                type: 'search',
                sx: {
                    backgroundColor: 'white',
                    borderRadius: '100px',
                    color: 'primary.main',
                },
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchRoundedIcon/>
                    </InputAdornment>
                ),
            }}
            sx={{
                width: '100%',
                margin: '200px 30px 30px 30px',
            }}
            onChange={(event) => props.onChange(event.target.value)}
        />
    );
}
export default SearchBar;