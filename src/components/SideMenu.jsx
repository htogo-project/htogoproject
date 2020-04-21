import React, { useState } from "react";
import Sidebar from "react-sidebar";

const SideMenu = () => {
    const [sideBar, setsideBar] = useState(true)

    const onSetSidebarOpen = (open) => {
        setsideBar(open)    
    }

    return (
        <div>
            <Sidebar
                sidebar={<b>Sidebar content</b>}
                open={sideBar}
                onSetOpen={onSetSidebarOpen}
                styles={{ sidebar: { background: "white" } }}
            >
                <button onClick={() => onSetSidebarOpen(true)}>
                    Open sidebar
        </button>
            </Sidebar>
        </div>
    )
}

export default SideMenu;