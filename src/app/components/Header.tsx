import { Container, Grid } from "@mui/material"

interface IHeaderProps {
    title: string;
    body: string;
    backgroundImage?: string;
}

export const Header = (props: IHeaderProps) => {
    const {title, body, backgroundImage} = props;
    
    return (
    <Container data-testid="header" maxWidth="md" sx={{backgroundImage: `url('${backgroundImage}')`}}>
    <Grid container spacing={2}>
        <Grid size={12}>
            {title}
        </Grid>
        <Grid size={12}>
            {body}
        </Grid>
    </Grid>
</Container>)}