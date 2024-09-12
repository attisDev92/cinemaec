import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'

const TechnicalTeam = ({ team }) => {
  return (
    <>
      <h5>Equipo técnico</h5>
      <Table aria-label="simple table">
        {team && team.length > 0 ? (
          <>
            <TableBody>
              {team.map((member, i) => (
                <TableRow key={i}>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        ) : (
          <TableBody>
            <TableRow>
              <TableCell>
                Aún no se registran personas en el equipo
                técnico
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </>
  )
}

export default TechnicalTeam
