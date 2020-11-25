import React, {Suspense} from 'react'
import {Spin} from 'antd'
import { Switch, Route} from 'react-router-dom'
import menus from "./menus";

function RouterView() {
    const renderRouter = (menus) => {
        return menus.map(item => {
            if(item.children){
                return renderRouter(item.children)
            }else{
                return <Route 
                path={ item.path }
                key={item.path}
                exact
                component = { item.component }/>
            }
        })
    }
    return (
        <Suspense fallback={<div className="loading"><Spin /></div>}>
            <Switch>
                {
                    renderRouter(menus)
                }
            </Switch>
        </Suspense>
    )
}

export default RouterView



