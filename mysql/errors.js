const errors = (res, err) => {
    console.log('SQL Error is', err)
    return res.status(500).send('An error has occurred');
};

module.exports = {errors};