import Vue from 'vue'
import Router from 'vue-router'
import search_index from '@/components/search_index'
import search_results from '@/components/page/search_results'
import content_article from '@/components/page/content_article'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'search_index',
        component: search_index,
        children: [{
                path: '',
                name: 'search_results',
                component: search_results
            },
            {
                path: 'content_article',
                name: 'content_article',
                component: content_article
            }
        ]
    }]
})