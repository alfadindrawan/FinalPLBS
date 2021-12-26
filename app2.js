app.get('/', (req,res) => {
    connection.query(
        'SELECT *FROM items',
            (err, results) => {
            if(err) throw err
            res.send(results)
        }
    );
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
    connection.connect((err) => {
        if(err) throw err;
        console.log('Database connected');
    })
})