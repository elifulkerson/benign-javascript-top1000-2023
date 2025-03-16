window.htlbid = window.htlbid || {};
          htlbid.cmd = htlbid.cmd || [];
          htlbid.cmd.push(function() {
            htlbid.layout('universal'); // Leave as 'universal' or add custom layout
            htlbid.setTargeting("is_testing","no"); // Set to "no" for production
            htlbid.setTargeting("is_home", "yes"); // Set to "yes" on the homepage
            
          });