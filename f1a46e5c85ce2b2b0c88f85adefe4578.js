var pageRevenueId = String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, ''),
        OB_pubImpId = pageRevenueId;
    document.querySelector('meta[property="bf:id_pi"]').setAttribute("content", pageRevenueId);