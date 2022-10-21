import { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  gread:string
}
interface S500 {
  statusCode: number
  message: string
}

const handler = (_req: NextApiRequest, res: NextApiResponse<Data | S500>) => {
  try {
    res.status(200).json({gread:"test"})
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler