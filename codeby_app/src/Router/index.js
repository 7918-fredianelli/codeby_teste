import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../Pages/Home/index";
import FreeShippingCart from "../Pages/FreeShippingCart/index";
import NotFreeShippingCart from "../Pages/NotFreeShippingCart/index";
import PageNotFound from "../Pages/PageNotFound/index";

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/Home">
                    <Home/>
                </Route>
                <Route exact path="/CarrinhoFreteGratis">
                    <FreeShippingCart/>
                </Route>
                <Route exact path="/CarrinhoComFrete">
                    <NotFreeShippingCart/>
                </Route>
                <Route path="/">
                    <PageNotFound/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;