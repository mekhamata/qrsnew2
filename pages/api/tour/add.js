import connectMongo from '../../../utils/dbConnect';
import Samar from '../../../models/toursModel';
export default async function addTour(req, res) {
  try {
    const { name } = req.body;

    console.log('connecting to mongo');
    await connectMongo();
    console.log('connected to mongo');
    console.log('Creating document');
    const tour = await Samar.create(req.body);
    console.log('created document');

    res.json({ tour });
  } catch (err) {
    res.status(500).json({
      status: 'Fail',
      message: 'Duplicate!',
    });
  }
}
