export const register = async (req, res) => {

    const q="SELECT * FROM users WHERE username = ?"
    db.query(q, [req.body.username], (err, data) => {
        if(err) {
            return res.status(500).json({message: err.message})
        } 
        if (data.length) {
            return res.status(409).json("user already exist")
        }
    })   

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password,salt);


    const q2 = "INSERT INTO users (`username`,`email`,`password`,`name`) VALUES (?)"
    const values = [
        req.body.username,
        req.body.email,
        hashedPassword,
        req.body.name
    ];

    db.query(q2, [values], (err, data) => {
        if (err) {
            return res.status(500).json({message: err.message});
        }
        return res.status(201).json("User has been created.");
    });









}

export const login = async (req, res) => {
}

export const logout = async (req, res) => {
    res.clearCookie("acessToken", {
        secure:true,
        someSite:"nonw"
    })
}