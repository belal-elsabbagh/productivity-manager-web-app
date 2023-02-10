import { useState } from 'react';
import { projectFound } from '@/lib/filters';
export default function useProjectsFilter(data, filter) {
    const [filteredData, setFilteredData] = useState(data);
    const [filterValue, setFilterValue] = useState(filter);
    function filterData(key, value) {
        const newFilter = { ...filterValue, [key]: value }
        setFilterValue(newFilter);
        const filtered = data.filter(function (item) {
            return projectFound(item, newFilter)
        });
        setFilteredData(filtered);
    }
    return [filteredData, filterValue, filterData];
}
