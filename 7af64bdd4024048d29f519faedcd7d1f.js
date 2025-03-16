var g_gazeta_counters_reload_last_url = location.href;
function g_gazeta_counters_reload() {
if ( g_gazeta_counters_reload_last_url !== location.href ) {
g_gazeta_ym_reload();
g_gazeta_li_reload();
// g_gazeta_ga_reload();
g_gazeta_tns_reload();
g_gazeta_tns_mediascope_reload();
g_gazeta_counters_reload_last_url = location.href;
}
}