import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  let id;
  id = router.query.id;
  if (!id && typeof window !== "undefined") {
    id = window.location.pathname.split("/").pop();
  }
}
