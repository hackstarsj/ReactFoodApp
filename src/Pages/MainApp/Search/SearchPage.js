import {  Grid } from "@mui/material";
import Header from "../../common/Header";
import SearchTypeComponent from "../../common/SearchTypeComponent";

export default function SearchPage(props){

    let searchType=[
        {'title':'Type','searchNames':['Restaurant','Menu']},
        {'title':'Location','searchNames':['1 Km','>10 Km','<10KM']},
        {'title':'Food','searchNames':['Cake','Soup','Main Course','Appetizer','Dessert']}
    ]

   


    return (
        <>
        <Grid container>
        <Header showSearchPageLocal={props.mainShowSearchPage}/>
        </Grid>
        {searchType.map((item)=>(
            <SearchTypeComponent title={item.title} searchNames={item.searchNames}/>
        ))}
        </>
    )
}