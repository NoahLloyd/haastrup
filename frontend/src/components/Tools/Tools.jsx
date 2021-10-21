import React from 'react'
import ToolsList from './ToolsList'
import ToolsSearch from './ToolsSearch'

export default function Tools() {
    return (
        <div className="w-1/2 m-auto mt-10">
            <ToolsSearch />
            <ToolsList/>
        </div>
    )
}
