import LoadingIcon from "@components/icons/LoadingIcon"
import { Button, Stack } from "@mui/material"
import { useTranslation } from "react-i18next"

const HomePage = () => {
  const { t } = useTranslation()
  return (
    <Stack direction="column" className="w-fit">
      <h1>{t("home_page.main_title")}</h1>
      <p>
        {t("home_page.title", {
          name: "ChauHH",
        })}
      </p>
      <LoadingIcon />
      <Button variant="contained">Login</Button>
    </Stack>
  )
}

export default HomePage
