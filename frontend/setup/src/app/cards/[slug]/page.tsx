export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    return (
      <div>
        <h1>My Card: {slug}</h1>
      </div>
    )
}