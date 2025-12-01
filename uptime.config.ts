import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "J0han9's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  //links: [
  //  { link: 'https://github.com/lyc8503', label: 'GitHub' },
  //  { link: 'https://blog.lyc8503.net/', label: 'Blog' },
  //  { link: 'mailto:me@lyc8503.net', label: 'Email Me', highlight: true },
  //],
  // [OPTIONAL] Group your monitors
  // If not specified, all monitors will be shown in a single list
  // If specified, monitors will be grouped and ordered, not-listed monitors will be invisble (but still monitored)
  group: {
    '🌐 Public': ['git_proxy', 'docker_proxy', 'libtv'],
    '🔐 Private': ['GenimiAPI', 'Blog-github', 'tmpMail', 'Imgbed', 'Bloug-vps','FreshRSS', 'Rsshub', 'Dashboard', 'n8n', 'PDFtool'],
  },
}

const workerConfig: WorkerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    //{
      // `id` should be unique, history will be kept if the `id` remains constant
      //id: 'foo_monitor',
      // `name` is used at status page and callback message
      //name: 'My API Monitor',
      // `method` should be a valid HTTP Method
      //method: 'POST',
      // `target` is a valid URL
      //target: 'https://example.com',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      //tooltip: 'This is a tooltip for this monitor',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      //statusPageLink: 'https://example.com',
      // [OPTIONAL] `hideLatencyChart` will hide status page latency chart if set to true
      //hideLatencyChart: false,
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      //expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      //timeout: 10000,
      // [OPTIONAL] headers to be sent
      //headers: {
      //  'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb',
      //  Authorization: 'Bearer YOUR_TOKEN_HERE',
      //},
      // [OPTIONAL] body to be sent
      //body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      //responseKeyword: 'success',
      // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
      //responseForbiddenKeyword: 'bad gateway',
      // [OPTIONAL] if specified, will call the check proxy to check the monitor, mainly for geo-specific checks
      // refer to docs https://github.com/lyc8503/9*4r%lYcz!DU*f%C4#Ea$%lyb/wiki/Check-proxy-setup before setting this value
      // currently supports `worker://` and `http(s)://` proxies
      //checkProxy: 'https://xxx.example.com OR worker://weur',
      // [OPTIONAL] if true, the check will fallback to local if the specified proxy is down
      //checkProxyFallback: true,
    //},
    // Example TCP Monitor
    {
      id: 'Blog-github',
      name: 'My Blog build on Github',
      method: 'GET',
      target: 'https://zywj0han9.github.io/',
      tooltip: 'My Blog',
      statusPageLink: 'https://zywj0han9.github.io/',
      timeout: 5000,
      headers: {
        'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb',
      },
    },
     {
      id: 'Blog-vps',
      name: 'My Blog build on Github',
      method: 'GET',
      target: 'https://blog.c0despace.uk/',
      tooltip: 'My Blog',
      statusPageLink: 'https://blog.c0despace.uk/',
      timeout: 5000,
      headers: {
        'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb',
      },
    },
    {
      id: 'tmpMail',
      name: 'My tmp email build on cloudflare',
      method: 'GET',
      target: 'https://tmpmail.c0despace.uk/',
      tooltip: 'My email',
      statusPageLink: 'https://tmpmail.c0despace.uk/',
      timeout: 5000,
      headers: {
        'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb',
      },
    },
    {
      id: 'Imgbed',
      name: 'My Img Bed build on cloudflare',
      method: 'GET',
      target: 'https://img.c0despace.uk/',
      tooltip: 'My img bed',
      statusPageLink: 'https://img.c0despace.uk/',
      timeout: 5000,
      headers: {
        'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb',
      },
    },
    {
      id: 'FreshRSS',
      name: 'My FreshRSS',
      method: 'GET',
      target: 'https://rss.c0despace.uk/',
      tooltip: 'My FreshRss',
      statusPageLink: 'https://rss.c0despace.uk/',
      timeout: 5000,
      headers: {
        'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb',
      },
    },
    {
      id: 'Dashboard',
      name: 'My Dashboard',
      method: 'GET',
      target: 'https://dashboard.c0despace.uk/',
      tooltip: 'My Dashboard',
      statusPageLink: 'https://dashboard.c0despace.uk/',
      timeout: 5000,
      headers: {
        'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb',
      },
    },
    {
      id: 'Rsshub',
      name: 'My Rsshub',
      method: 'GET',
      target: 'https://rsshub.c0despace.uk/',
      tooltip: 'My Rsshub',
      statusPageLink: 'https://rsshub.c0despace.uk/',
      timeout: 5000,
      headers: {
        'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb',
      },
    },
    {
      id: 'PDFtool',
      name: 'My PDFtool',
      method: 'GET',
      target: 'https://pdftools.c0despace.uk/',
      tooltip: 'My PDFtool',
      statusPageLink: 'https://pdftools.c0despace.uk/',
      timeout: 5000,
      headers: {
        'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb',
      },
    },
    {
      id: 'n8n',
      name: 'My n8n',
      method: 'GET',
      target: 'https://n8n.c0despace.uk/',
      tooltip: 'My n8n',
      statusPageLink: 'https://n8n.c0despace.uk/',
      timeout: 5000,
      headers: {
        'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb',
      },
    },
    {
      id: 'git_proxy',
      name: 'My github proxy build on cloudflare',
      method: 'GET',
      target: 'https://git.c0despace.uk/',
      tooltip: 'My github proxy',
      statusPageLink: 'https://git.c0despace.uk/',
      timeout: 5000,
      headers: {
        'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb',
      },
    },
    {
      id: 'libtv',
      name: 'My libtv build on cloudflare',
      method: 'GET',
      target: 'https://tv.c0despace.uk/',
      tooltip: 'My libtv',
      statusPageLink: 'https://tv.c0despace.uk/',
      timeout: 5000,
      headers: {
        'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb',
      },
    },
    {
      id: 'docker_proxy',
      name: 'My docker proxy build on cloudflare',
      method: 'GET',
      target: 'https://docker.c0despace.uk/',
      tooltip: 'My docker proxy',
      statusPageLink: 'https://docker.c0despace.uk/',
      timeout: 5000,
      headers: {
        'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb',
      },
    },
    {
      id: 'aur',
      name: 'arch aur',
      method: 'GET',
      target: 'https://aur.archlinux.org/rpc?v=5&type=info',
      tooltip: 'Aur Archlinux',
      statusPageLink: 'https://aur.archlinux.org',
      timeout: 5000,
      headers: {
        'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb',
      },
    },
  ],
  //notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    //appriseApiServer: 'https://apprise.example.com/notify',
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    //recipientUrl: 'tgram://bottoken/ChatID',
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    //timeZone: 'Asia/Seoul',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    //gracePeriod: 5,
    // [Optional] disable notification for monitors with specified ids
    //skipNotificationIds: ['foo_monitor', 'bar_monitor'],
  //},
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here
      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature
// const maintenances: MaintenanceConfig[] = []
const maintenances: MaintenanceConfig[] = [
  {
    // [Optional] Monitor IDs to be affected by this maintenance
    monitors: ['foo_monitor', 'bar_monitor'],
    // [Optional] default to "Scheduled Maintenance" if not specified
    title: 'Test Maintenance',
    // Description of the maintenance, will be shown at status page
    body: 'This is a test maintenance, server software upgrade',
    // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
    start: '2025-04-27T00:00:00+08:00',
    // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
    // if not specified, the maintenance will be considered as on-going
    end: '2025-04-30T00:00:00+08:00',
    // [Optional] color of the maintenance alert at status page, default to "yellow"
    color: 'blue',
  },
]

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig, maintenances }
