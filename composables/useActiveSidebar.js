const useActiveSidebar = ()=>{

    let dashboard = useState("dashboard", () => false);
    let workspace = useState("workspace", () => false);
    let leaders = useState("leaders", () => false);
    let analytics = useState("analytics", () => false);
    let posts = useState("posts", () => false);
    let curation = useState("curation", () => false);
    let category = useState("category", () => false);
    let users = useState("users", () => false);
    let roles = useState("roles", () => false);
    let partners = useState("partners", () => false);

    return{
        dashboard,
        workspace,
        leaders,
        analytics,
        posts,
        curation,
        category,
        users,
        roles,
        partners
    }
} 

export default useActiveSidebar