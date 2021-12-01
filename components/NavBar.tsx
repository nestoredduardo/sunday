import { BottomNavigation, BottomNavigationAction } from '@mui/material'

import DashboardIcon from '@mui/icons-material/Dashboard'
import ProjectIcon from '@mui/icons-material/Engineering'
import FinanceIcon from '@mui/icons-material/Savings'
import HabitsIcon from '@mui/icons-material/AllInclusive'
import AimIcon from '@mui/icons-material/TrackChanges'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NavBar = () => {
  const router = useRouter()

  useEffect(() => {
    console.log(router.pathname)
  }, [router])

  return (
    <BottomNavigation showLabels className="fixed bottom-0 w-full">
      <Link href="/">
        <BottomNavigationAction
          showLabel
          label="Dashboard"
          icon={<DashboardIcon />}
        />
      </Link>
      <Link href="/proyectos">
        <BottomNavigationAction
          showLabel
          label="Proyectos"
          icon={<ProjectIcon />}
        />
      </Link>
      <Link href="/finanzas">
        <BottomNavigationAction
          showLabel
          label="Finanzas"
          icon={<FinanceIcon />}
        />
      </Link>
      <Link href="/habitos">
        <BottomNavigationAction
          showLabel
          label="Hábitos"
          icon={<HabitsIcon />}
        />
      </Link>
      <Link href="/objetivos">
        <BottomNavigationAction
          showLabel
          label="Objetivos"
          icon={<AimIcon />}
        />
      </Link>
    </BottomNavigation>
  )
}

export default NavBar
