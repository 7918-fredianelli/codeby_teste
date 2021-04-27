import {BrowserRouter, Switch, Route} from "react-router-dom";

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {/* <Home/> */}
                </Route>
                <Route exact path="/Home">
                    {/* <Home/> */}
                </Route>
                <Route path="/">
                    {/* <NotFound/> */}
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;