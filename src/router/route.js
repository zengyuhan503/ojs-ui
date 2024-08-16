import HomeView from '../pages/home/index.vue'
import JournalsView from '../pages/journals/list.vue'
import JournalsInfo from '../pages/journals/info.vue'
import ArchivesView from '../pages/journals/archives.vue'
import JournalMain from '../pages/journals/journal_main.vue'
import ArticleShowing from '../pages/journals/articleShowing.vue'

const routes = [
    { path: '/', name: "Home", component: HomeView },
    { path: '/journals', name: "journals", component: JournalsView },
    { path: '/journalsInfo', name: "journalsInfo", component: JournalsInfo },
    { path: '/archives', name: "archives", component: ArchivesView },
    { path: '/journalMain', name: "JournalMain", component: JournalMain },
    { path: '/articleShowing', name: "ArticleShowing", component: ArticleShowing },
]

export default routes;