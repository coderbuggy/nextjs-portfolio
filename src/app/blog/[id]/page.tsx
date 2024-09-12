import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
export async function generateStaticParams() {
  const querySnapshot = await getDocs(collection(db, "blogs"));

  if (querySnapshot.empty) {
    console.warn("No blogs found in the 'blogs' collection.");
    // Boş koleksiyon durumunda varsayılan bir rota döndürebilirsiniz.
    return [{ id: "default" }]; // Bu ID'ye sahip bir varsayılan sayfa yaratabilirsiniz.
  }

  const paths = querySnapshot.docs.map((doc) => ({
    id: doc.id,
  }));

  return paths;
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const docRef = doc(db, "blogs", params.id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return <p>Blog Not Found.</p>;
  }

  const blog = docSnap.data();

  return (
    <div className="container w-full p-4">
      <h2 className="text-center text-3xl font-bold mb-4">{blog.title}</h2>
      <p className="text-center text-gray-500 mb-4">
        {new Date(blog.date.seconds * 1000).toDateString()}
      </p>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
    </div>
  );
}
