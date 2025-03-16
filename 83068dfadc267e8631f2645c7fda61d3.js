var rightbarad = `[{"id":"rba_default3","created_at":"2023-09-18 00:15:19","html":"","url":"https://www.geeksforgeeks.org/courses/data-science-live?utm_source=geeksforgeeks&utm_medium=rightbar_datascience_def&utm_campaign=inbound_promotions","title":"Data Science & ML","thumbnail":"https://media.geeksforgeeks.org/wp-content/post-ads-banner/2023-04-03-15-53-45-cds.gif"},{"id":"rba_default2","created_at":"2023-09-12 19:27:17","html":"","url":"https://www.geeksforgeeks.org/courses/gate-data-science-and-artificial-intelligence-da-2024?utm_source=geeksforgeeks&utm_medium=rightbar_gateda_def&utm_campaign=inbound_promotions","title":"GATE: DS & AI","thumbnail":"https://media.geeksforgeeks.org/wp-content/post-ads-banner/2023-06-09-13-03-00-System-Design_100x100-02.png"},{"id":"rba_default5","created_at":"2023-05-02 22:16:30","html":"","url":"https://practice.geeksforgeeks.org/courses/dsa-self-paced?utm_source=geeksforgeeks&utm_medium=rightbar_dsa_def&utm_campaign=inbound_promotions","title":"DSA: Basic To Advanced Course","thumbnail":"https://media.geeksforgeeks.org/wp-content/post-ads-banner/2023-05-02-22-16-27-Dsa-Gif.gif"}]`;
    try{
        var a=JSON.parse(rightbarad);
        window.rightBarRes=a;
    }
    catch(err){
        window.rightBarRes=[];
    }