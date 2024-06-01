import mongoose, { Schema } from 'mongoose';

// Ensure mongoose is connected
if (!mongoose.connections[0].readyState) {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

mongoose.Promise = global.Promise;

const clientSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: Number, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

const Client = mongoose.models.Client || mongoose.model('Client', clientSchema);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const clientData = new Client(req.body);
      await clientData.save();
      return res.status(201).json(clientData);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
