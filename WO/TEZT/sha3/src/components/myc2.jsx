import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export function Card2() {
  const [name, setName] = useState("")
  const [framework, setFramework] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      `💀 You chose to "${framework}" for project "${name}". Absolute legend.`
    )
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create cursed project</CardTitle>
        <CardDescription>Pick your favorite nasty action</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Project Name</Label>
              <Input
                id="name"
                placeholder="e.g. 'Smelly Adventure'"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Action</Label>
              <Select
                value={framework}
                onValueChange={(value) => setFramework(value)}
              >
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select your nastiness" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Smell Pussy" className="hover:bg-pink-100">
                    👃 Smell Pussy
                  </SelectItem>
                  <SelectItem value="Lick Ass" className="hover:bg-amber-100">
                    👅 Lick Ass
                  </SelectItem>
                  <SelectItem
                    value="Smell Armpit"
                    className="hover:bg-yellow-100"
                  >
                    🤢 Smell Armpit
                  </SelectItem>
                  <SelectItem value="Sniff Fart" className="hover:bg-green-100">
                    💨 Sniff Fart
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <CardFooter className="flex justify-between mt-4 p-0 pt-6">
            <Button
              variant="outline"
              onClick={() => {
                setName("")
                setFramework("")
              }}
            >
              Nope
            </Button>
            <Button
              type="submit"
              disabled={!name || !framework}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Commit War Crime
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}
