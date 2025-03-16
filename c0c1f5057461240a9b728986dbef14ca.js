let path_val = location.pathname.split("/");
//console.log(path_val);

if (path_val[1] == 'm') {
    new_path_val = path_val.splice(1, 1);
    //console.log(path_val);
    new_path = path_val.join('/');
    //console.log(new_path);
    location.replace('https://www.jugantor.com' + new_path);
}