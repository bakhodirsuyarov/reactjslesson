import Cases from "../child/Cases";
import DesignValues from "../child/DesignValues";
import Introduction from "../child/Introduction";
import Components from "../pages/Components";
import Design from "../pages/Design";
import Development from "../pages/Development";

const Data = [
    {
        id: 1,
        title: 'Design',
        component: <Design />,
        navigation: '/design',
        childs: [
            {
                id: 1.1,
                title: 'Introduction',
                navigation: '/design/introduction',
                component:<Introduction/>
            },
            {
                id: 1.2,
                title: 'DesignValues',
                navigation: '/design/designValues',
                component:<DesignValues/>
            },
            {
                id: 1.3,
                title: 'Cases',
                navigation: '/design/cases',
                component:<Cases/>
            },
        ]
    },
    {
        id: 2,
        title: 'Development',
        component: <Development />,
        navigation: '/development',
    },
    {
        id: 3,
        title: 'Components',
        component: <Components />,
        navigation: '/components',
    },
];

export default Data;
